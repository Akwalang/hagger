import { Loader, Cache } from "@/global/classes";
import { useEffect, useState } from "react";

interface SvgImageProps {
  src: string;
}

const LOADER = new Loader(new Cache(10));

export const SvgImage: React.FC<SvgImageProps> = (props) => {
  const { src, ...other } = props;

  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    const { src } = props;

    const load = async () => {
      const data = await LOADER.load(src);
      const svg = await data.text();

      setSvg(svg.replace(/^.*(<svg\s)/is, "$1"));
    };

    load().catch((e) => console.error(e.message));
  }, [props.src]);

  return (
    <div {...other} dangerouslySetInnerHTML={{ __html: svg || "" }} />
  );
};
