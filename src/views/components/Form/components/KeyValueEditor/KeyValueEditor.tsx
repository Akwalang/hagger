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

const KeyValueItem: React.FC<KeyValueItemProps> = (props) => {
  const textAreaClassName = cn(
    // "resize-none focus:outline-1 focus:inset-ring-[1px] focus:inset-ring",
    "resize-none focus:outline-0",
  );

  return (
    <>
      <div className="flex items-center justify-center">
        {props.edit?.includes('active') && <Checkbox className="block" disabled={props.item.isRequired} checked={props.item.active} />}
      </div>
      <textarea className={textAreaClassName}>{props.item.key}</textarea>
      <textarea className={textAreaClassName}>{props.item.value}</textarea>
      <textarea className={textAreaClassName}>{props.item.description}</textarea>
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
    "font-light text-left text-[0.91rem] border-t-1 border-l-1",
    "[&>*]:px-2 [&>*]:py-1 [&>*]:border-r-1 [&>*]:border-b-1",
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
