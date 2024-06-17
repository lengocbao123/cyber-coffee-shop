import { Option } from "@/data/products";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const ProductOption = ({ option }: { option: Option }) => (
  <div className="w-full space-y-3">
    <h2 className="text-sm font-semibold capitalize">{option.name}</h2>
    <div className="flex gap-5">
      {option.optionValue.map((value) => (
        <RadioGroup
          key={value.id}
          defaultValue={option.optionValue[0].id.toString()}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={value.id.toString()} id={value.id.toString()} />
            <Label className="capitalize text-xs" htmlFor={value.id.toString()}>
              {value.name}
            </Label>
          </div>
        </RadioGroup>
      ))}
    </div>
  </div>
);

export default ProductOption;
