import { useEffect, useRef } from "react";

import { Checkbox } from "@/views/ui/checkbox"

import { useLang } from '@/global/hooks/useLang';
import { cn } from "@/utils/react";

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

  // format:


  // type: 'string' | 'boolean' | 'file' | 'number' | 'select' | 'multiselect';
  // availableValues?: { name: string, value: string }[];
  // availableTypes?: ('string' | 'boolean' | 'file' | 'number' | 'select' | 'multiselect')[];
  // validation: {
  //   type: 'none' | 'type' | 'extension' | 'enum' | 'regexp' | 'function';
  // };
};

interface KeyValueItemProps {
  item: KeyValueItem;
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

  useEffect(adjustHeight, [props.item.key, props.item.value, props.item.description]);

  return (
    <>
      <div className="flex justify-center">
        <Checkbox className="block my-[5px]" checked={props.item.active[0]} disabled={!props.item.active[1]} />
      </div>
      <textarea key={'k' + props.item.key[0]} ref={(tag) => ref.current[0] = tag} {...taProps} defaultValue={props.item.key[0]} disabled={!props.item.key[1]} />
      <textarea key={'v' + props.item.value[0]} ref={(tag) => ref.current[1] = tag} {...taProps} defaultValue={props.item.value[0]} disabled={!props.item.value[1]} placeholder={props.item.example || ''} />
      <textarea key={'d' + props.item.key[0]} ref={(tag) => ref.current[2] = tag} {...taProps} defaultValue={props.item.description[0]} disabled={!props.item.description[1]} />
    </>
  );
};

interface KeyValueEditorProps {
  items: KeyValueItem[];
  edit?: (keyof KeyValueItem)[];
}

export const KeyValueEditor: React.FC<KeyValueEditorProps> = (props) => {
  const lang = useLang((store) => store.components.form.keyValueEditor);

  const rootClassName = cn(
    "grid gap-0 grid-cols-[32px_4fr_7fr_12fr]",
    "font-light text-left text-[0.85rem] pt-[1px] pl-[1px]",
    "[&>*]:px-2 [&>*]:py-1 [&>*]:border-[1px] [&>*]:ml-[-1px] [&>*]:mt-[-1px]",
  );

  return (
    <div className={rootClassName}>
      <div />
      <div className="font-normal">{lang.columns.key()}</div>
      <div className="font-normal">{lang.columns.value()}</div>
      <div className="font-normal">{lang.columns.description()}</div>

      {props.items.map((item, i) => <KeyValueItem key={'i' + i} item={item} />)}
    </div>
  );
};
