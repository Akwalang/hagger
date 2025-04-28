import { memo, useMemo } from "react";

import { Checkbox } from "@/views/ui/checkbox"

import { useLang } from '@/global/hooks/useLang';

import { isEqual } from "@/utils/is";
import { cn } from "@/utils/react";

import { ContentEditable } from "../ContentEditable/ContentEditable";

export type KeyValueItem = {
  isPinned: boolean;
  isRemovable: boolean;
  isRequired: boolean;
  isNullable: boolean;
  isValid: boolean;

  // [value, isMutable]
  active: [boolean, boolean];
  key: [string, boolean];
  value: [string, boolean];
  description: [string, boolean];

  example?: string;

  keyOptions?: string[];
  valueOptions?: string[];

  // format:


  // type: 'string' | 'boolean' | 'file' | 'number' | 'select' | 'multiselect';
  // availableValues?: { name: string, value: string }[];
  // availableTypes?: ('string' | 'boolean' | 'file' | 'number' | 'select' | 'multiselect')[];
  // validation: {
  //   type: 'none' | 'type' | 'extension' | 'enum' | 'regexp' | 'function';
  // };
};

interface KeyValueItemProps {
  idx: number;
  item: KeyValueItem;
  onChange: (idx: number, update: Partial<KeyValueItem>) => void;
}

const KeyValueItem: React.FC<KeyValueItemProps> = memo((props) => {
  const { idx, item } = props;

  const fieldClassName = "px-2 py-1.5 border-[1px]";

  const onChange = useMemo(() => {
    const { onChange } = props;

    return {
      onActiveChange: (value: boolean) => onChange(idx, { active: [value, item.key[1]] }),
      onKeyChange: (value: string) => onChange(idx, { key: [value, item.key[1]] }),
      onValueChange: (value: string) => onChange(idx, { value: [value, item.value[1]] }),
      onDescriptionChange: (value: string) => onChange(idx, { description: [value, item.description[1]] }),
    };
  }, [props.onChange, idx]);

  return (
    <>
      <div className="px-2 py-1 flex justify-center border-[1px]">
        <Checkbox
          className="block my-[5px]"
          checked={item.active[0]}
          disabled={!item.active[1]}
          onCheckedChange={onChange.onActiveChange}
        />
      </div>
      <ContentEditable
        key={'k' + idx}
        fieldClassName={cn(fieldClassName, "break-all")}
        value={item.key[0]}
        disabled={!item.key[1]}
        onChange={onChange.onKeyChange}
        options={item.keyOptions}
      />
      <ContentEditable
        key={'v' + idx}
        fieldClassName={cn(fieldClassName, "break-all")}
        value={item.value[0]}
        disabled={!item.value[1]}
        placeholder={item.example}
        options={item.valueOptions}
        onChange={onChange.onValueChange}
      />
      <ContentEditable
        key={'d' + idx}
        fieldClassName={fieldClassName}
        value={item.description[0]}
        disabled={!item.description[1]}
        onChange={onChange.onDescriptionChange}
      />
    </>
  );
}, isEqual);

interface KeyValueEditorProps {
  items: KeyValueItem[];
  edit?: (keyof KeyValueItem)[];
  onChange: (idx: number, update: Partial<KeyValueItem>) => void;
}

export const KeyValueEditor: React.FC<KeyValueEditorProps> = (props) => {
  const lang = useLang((store) => store.components.form.keyValueEditor);

  return (
    <div className={cn(
      "grid gap-0 grid-cols-[32px_4fr_7fr_12fr]",
      "font-light text-left text-[0.85rem]/[1.45rem] pt-[1px] pl-[1px]",
      "[&>*]:ml-[-1px] [&>*]:mt-[-1px]",
    )}>
      <div className="border-[1px]" />
      <div className="px-2 py-1.5 font-semibold border-[1px]">{lang.columns.key()}</div>
      <div className="px-2 py-1.5 font-semibold border-[1px]">{lang.columns.value()}</div>
      <div className="px-2 py-1.5 font-semibold border-[1px]">{lang.columns.description()}</div>

      {props.items.map((item, i) => <KeyValueItem key={'i' + i} idx={i} item={item} onChange={props.onChange} />)}
    </div>
  );
};
