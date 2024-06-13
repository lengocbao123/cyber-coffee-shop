import { IProductOption } from "@/data/products";
import { Toggle } from "@/components/ui/toggle";

const ProductOption = ({ option }: { option: IProductOption }) => (
  <div className="w-full space-y-3">
    <h2 className="text-sm font-semibold capitalize">{option.name}</h2>
    <div className="flex gap-5">
      {option.optionValue.map((value) => (
        <Toggle className="border" key={value.id}>
          <span className="capitalize text-xs">{value.name}</span>
        </Toggle>
      ))}
    </div>
  </div>
);

export default ProductOption;
