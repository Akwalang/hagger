import { Checkbox } from "@/views/ui/checkbox"

import { useLang } from '@/global/hooks/useLang';

import { cn } from '@/utils/react';

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
  return (
    <tr>
      <td className="w-[32px]">
        {props.edit?.includes('active') && <Checkbox className="block ml-[9px]" disabled={props.item.isRequired} checked={props.item.active} />}
      </td>
      <td className="px-2 py-1 font-light text-[0.91rem]">{props.item.key}</td>
      <td className="px-2 py-1 font-light text-[0.91rem]">{props.item.value}</td>
      <td className="px-2 py-1 font-light text-[0.91rem]">{props.item.description}</td>
    </tr>
  );
};

interface KeyValueEditorProps {
  items: KeyValueItem[];
  edit?: (keyof KeyValueItem)[];
}

export const KeyValueEditor: React.FC<KeyValueEditorProps> = (props) => {
  const lang = useLang((store) => store.components.form.keyValueEditor);

  const edit = props.edit ?? [];

  return (
    <table className="w-full [&_th,&_td]:border-1">
      <thead>
        <tr>
          <th />
          <th className="px-2 py-1 font-normal text-left text-[0.91rem]">{lang.columns.key()}</th>
          <th className="px-2 py-1 font-normal text-left text-[0.91rem]">{lang.columns.value()}</th>
          <th className="px-2 py-1 font-normal text-left text-[0.91rem]">{lang.columns.description()}</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, i) => <KeyValueItem key={'i' + i} item={item} edit={edit} />)}
      </tbody>
    </table>
  );
};
