import { useEffect, useRef } from "react";

import { Checkbox } from "@/views/ui/checkbox"

import { useLang } from '@/global/hooks/useLang';
import { cn } from "@/utils/react";

export type KeyValueItem = {
  active: boolean;
  key: string;
  value: string;
  description: string;
  isRequired: boolean;
};

interface KeyValueItemProps {
  item: KeyValueItem;
  edit?: (keyof KeyValueItem)[];
}

type TextareaRef = HTMLTextAreaElement | null;

const KeyValueItem: React.FC<KeyValueItemProps> = (props) => {
  const ref = useRef<[TextareaRef, TextareaRef, TextareaRef]>([null, null, null]);

  const adjustHeight = () => {
    const heights = [0, 0, 0];

    for (let i = 0; i < ref.current.length; i++) {
      const height = ref.current[i]?.style.height || ref.current[i]?.clientHeight + 'px';
      ref.current[i]!.style.height = '1px';
      heights[i] = ref.current[i]!.scrollHeight + 2;
      ref.current[i]!.style.height = height;
    }

    const max = Math.max(...heights);

    ref.current.forEach((tag) => tag!.style.height = max + 'px');
  };

  const taProps = {
    className: "resize-none focus:outline-0 focus:relative focus:border-primary overflow-hidden",
    onChange: adjustHeight,
  };

  useEffect(adjustHeight, []);

  return (
    <>
      <div className="flex justify-center">
        {props.edit?.includes('active') && <Checkbox className="block my-[5px]" disabled={props.item.isRequired} checked={props.item.active} />}
      </div>
      <textarea ref={(tag) => ref.current[0] = tag} defaultValue={props.item.key} {...taProps} />
      <textarea ref={(tag) => ref.current[1] = tag} defaultValue={props.item.value} {...taProps} />
      <textarea ref={(tag) => ref.current[2] = tag} defaultValue={props.item.description} {...taProps} />
    </>
  );
};

interface KeyValueEditorProps {
  items: KeyValueItem[];
  edit?: (keyof KeyValueItem)[];
}

export const KeyValueEditor: React.FC<KeyValueEditorProps> = (props) => {
  const lang = useLang((store) => store.components.form.keyValueEditor);

  const edit = props.edit ?? [];

  const rootClassName = cn(
    "grid gap-0 grid-cols-[32px_2fr_3fr_6fr]",
    "font-light text-left text-[0.91rem] pt-[1px] pl-[1px]",
    "[&>*]:px-2 [&>*]:py-1 [&>*]:border-[1px] [&>*]:ml-[-1px] [&>*]:mt-[-1px]",
  );

  return (
    <div className={rootClassName}>
      <div />
      <div className="font-normal">{lang.columns.key()}</div>
      <div className="font-normal">{lang.columns.value()}</div>
      <div className="font-normal">{lang.columns.description()}</div>

      {props.items.map((item, i) => <KeyValueItem key={'i' + i} item={item} edit={edit} />)}
    </div>
  );
};
