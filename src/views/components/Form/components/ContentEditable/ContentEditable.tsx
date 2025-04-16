import { useRef, useEffect, useState } from "react";

import { cn } from "@/utils/react";

import { empower } from "./utils/empower.utils";

interface ContentEditableProps {
  className?: string;
  value: string;
  placeholder?: string;
  options?: string[];
  disabled?: boolean
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const ContentEditable: React.FC<ContentEditableProps> = (props) => {
  const [value, setValue] = useState(props.value);
  const field = useRef<HTMLDivElement>(null);

  const onChange = (value: string) => {
    props.onChange?.(value.trim());
    setValue(value);
    field.current!.textContent = value;
  };

  const onSelect = (value: string) => {
    onChange(value);
    setValue(value);
    field.current!.textContent = value;
  };

  useEffect(() => empower(field.current!), []);

  return (
    <div className={cn("relative", props.className)}>
      <div
        ref={field}
        className="w-full h-full px-2 py-1 break-all cursor-text focus:outline-0 focus:relative focus:border-primary"
        contentEditable={!props.disabled}
        role="textbox"
        suppressContentEditableWarning={true}
        onInput={() => onChange(field.current!.textContent ?? "")}
      >
        {props.value}
      </div>
      {!!props.options?.length && <Options value={value} options={props.options} onSelect={onSelect} />}
    </div>
  );
};

interface OptionsProps {
  value: string;
  options: string[];
  onSelect: (option: string) => void;
}

const Options: React.FC<OptionsProps> = (props) => {
  const val = props.value.toLowerCase();

  const list = props.options.filter((option) => {
    option = option.toLowerCase();

    return option.includes(val) && option !== val;
  });

  if (!list.length) return null;

  return (
    <div className="absolute w-[160px] top-full left-0">
      {list.map((option, i) => (
        <div key={i} className="w-full flex items-center justify-between" onClick={() => props.onSelect(option)}>
          {option}
        </div>
      ))}
    </div>
  );
}
