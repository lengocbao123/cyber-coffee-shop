import { Option } from '@/data/products';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';

const ProductOption = ({
  index,
  option,
  value,
  onChange,
}: {
  index: number;
  option: Option;
  value: number;
  onChange: (id: number, value: string) => void;
}) => (
  <div className="w-full space-y-3">
    <h2 className="text-sm font-semibold capitalize">{option.name}</h2>
    <div className="flex gap-5">
      {option.optionValue.map(v => (
        <RadioGroup
          key={v.id}
          value={value.toString()}
          onValueChange={value => {
            onChange(parseInt(value), v.name);
          }}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={v.id.toString()} id={v.id.toString()} />
            <Label className="capitalize text-xs" htmlFor={v.id.toString()}>
              {v.name}
            </Label>
          </div>
        </RadioGroup>
      ))}
    </div>
  </div>
);

export default ProductOption;
