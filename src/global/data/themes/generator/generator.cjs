const fs = require("fs");
const path = require("path");

const { rawThemes } = require("./raw-styles.cjs");

const toPascalCase = (text) => {
  return text.toLowerCase().replace(/(?:^|-)(\w)/g, (_, letter) => letter.toUpperCase());
};

const toCamelCase = (text) => {
  return text.toLowerCase().replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
};

const toSnakeCase = (text) => {
  return text.toLowerCase().replace(/-/g, '_');
};

const toCss = (styles) => {
  const css = {};

  for (const [key, values] of Object.entries(styles)) {
    let items = [];

    for (const [name, value] of Object.entries(values)) {
      items.push(`    --${name}: ${value};`);
    }

    css[key] = items.join('\n');
  }

  return css;
};

const saveStyles = () => {
  const result = [];

  for (const [name, { label, styles }] of Object.entries(rawThemes)) {
    const file = `../styles/${name}.ts`;
    const importPath = `./styles/${name}.ts`;
    const dest = path.join(__dirname, file);

    const css = toCss(styles);

    let data = '';

    data += `export const styles = {\n`;

    for (const [key, value] of Object.entries(css)) {
      data += `  ${key}: \`\n${value}\n  \`,\n`;
    }

    data += `} as const;\n`;

    fs.writeFileSync(dest, data, (err) => {
      if (err) {
        console.error(`Error writing file ${dest}:`, err);
      } else {
        console.log(`File ${dest} written successfully.`);
      }
    });

    result.push({ name, label, file, importPath });
  }

  return result.sort((a, b) => a.name.localeCompare(b.name));
};

const saveStylesExport = (files) => {
  let data = '';

  for (const { name, importPath } of files) {
    data += `import { styles as ${toCamelCase(name)} } from "${importPath}";\n`;
  }

  data += '\n';

  data += `import { ThemeName } from "./enums";\n`;

  data += '\n';

  data += 'export type ThemeStyle = { light: string, dark: string };\n';

  data += '\n';

  data += `export const styles: Record<ThemeName, ThemeStyle> = {\n`;

  for (const { name } of files) {
    data += `  [ThemeName.${toPascalCase(name)}]: ${toCamelCase(name)},\n`;
  }

  data += `};\n`;

  const dest = path.join(__dirname, '../styles.ts');

  fs.writeFileSync(dest, data, (err) => {
    if (err) {
      console.error(`Error writing file ${dest}:`, err);
    } else {
      console.log(`File ${dest} written successfully.`);
    }
  });
};

const saveEnumsExport = (files) => {
  let data = '';

  data += `export enum ThemeName {\n`;

  for (const { name } of files) {
    data += `  ${toPascalCase(name)} = "${toSnakeCase(name)}",\n`;
  }

  data += `};\n`;

  data += `\n`;

  data += `export enum ThemeMode {\n`;
  data += `  Light = 'light',\n`;
  data += `  Dark = 'dark',\n`;
  data += `};\n`;

  const dest = path.join(__dirname, '../enums.ts');

  fs.writeFileSync(dest, data, (err) => {
    if (err) {
      console.error(`Error writing file ${dest}:`, err);
    } else {
      console.log(`File ${dest} written successfully.`);
    }
  });
};

const saveThemesExport = (files) => {
  let data = '';

  data += `import { ThemeStyle, styles } from "./styles";\n`;
  data += `import { ThemeName } from "./enums";\n`;

  data += '\n';

  data += `export type ThemeItem = {\n`;
  data += `  name: ThemeName;\n`;
  data += `  label: string;\n`;
  data += `  styles: ThemeStyle;\n`;
  data += `};\n`;

  data += '\n';

  data += `export const themes: Record<ThemeName, ThemeItem> = {\n`;

  for (const { name, label } of files) {
    data += `  [ThemeName.${toPascalCase(name)}]: {\n`;
    data += `    name: ThemeName.${toPascalCase(name)},\n`;
    data += `    label: "${label}",\n`;
    data += `    styles: styles[ThemeName.${toPascalCase(name)}],\n`;
    data += `  },\n`;
  }

  data += `} as const;\n`;

  const dest = path.join(__dirname, '../themes.ts');

  fs.writeFileSync(dest, data, (err) => {
    if (err) {
      console.error(`Error writing file ${dest}:`, err);
    } else {
      console.log(`File ${dest} written successfully.`);
    }
  });
};

const run = () => {
  const files = saveStyles();

  saveEnumsExport(files);
  saveStylesExport(files);
  saveThemesExport(files);
};

run();
