import { useEffect, useRef } from "react";

import { Checkbox } from "@/views/ui/checkbox"

import { useLang } from '@/global/hooks/useLang';
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
  onChange: (update: KeyValueItem) => void;
}

const KeyValueItem: React.FC<KeyValueItemProps> = (props) => {
  const className = "[&>*]:first:px-2 [&>*]:first:py-1.5";

  return (
    <>
      <div className="px-2 py-1 flex justify-center">
        <Checkbox className="block my-[5px]" checked={props.item.active[0]} disabled={!props.item.active[1]} />
      </div>
      <ContentEditable
        key={'k' + props.item.key[0]}
        className={className}
        value={props.item.key[0]}
        disabled={!props.item.key[1]}
        onChange={(value) => console.log("Key:", value)}
      />
      <ContentEditable
        key={'v' + props.item.value[0]}
        className={className}
        value={props.item.value[0]}
        disabled={!props.item.value[1]}
        placeholder={props.item.example || ''}
        onChange={(value) => console.log("Value:", value)}
        options={['red', 'green', 'blue', 'black', 'white', 'yellow', 'orange', 'purple', 'pink']}
      />
      <ContentEditable
        key={'d' + props.item.key[0]}
        className={className}
        value={props.item.description[0]}
        disabled={!props.item.description[1]}
        onChange={(value) => console.log("Description", value)}
      />
    </>
  );
};

interface KeyValueEditorProps {
  items: KeyValueItem[];
  edit?: (keyof KeyValueItem)[];
  onChange?: (idx: number, update: KeyValueItem) => void;
}

export const KeyValueEditor: React.FC<KeyValueEditorProps> = (props) => {
  const lang = useLang((store) => store.components.form.keyValueEditor);

  const rootClassName = cn(
    "grid gap-0 grid-cols-[32px_4fr_7fr_12fr]",
    "font-light text-left text-[0.85rem]/[1.45rem] pt-[1px] pl-[1px]",
    "[&>*]:border-[1px] [&>*]:ml-[-1px] [&>*]:mt-[-1px]",
  );

  return (
    <div className={rootClassName}>
      <div />
      <div className="px-2 py-1 font-normal">{lang.columns.key()}</div>
      <div className="px-2 py-1 font-normal">{lang.columns.value()}</div>
      <div className="px-2 py-1 font-normal">{lang.columns.description()}</div>

      {props.items.map((item, i) => <KeyValueItem key={'i' + i} item={item} onChange={props.onChange(i)} />)}
    </div>
  );
};
