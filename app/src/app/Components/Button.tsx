import { ClipLoader } from "react-spinners";

export default function Button({
  text,
  isLoading,
  ...rest
}: Readonly<{ [key: string]: string | boolean; text: string; isLoading: boolean }>) {
  return (
    <button
      type="submit"
      className={`text-tertiary-gray text-sm font-semibold p-4 rounded-full w-full my-5 ${
        rest.disabled ? "bg-secondary-blue" : "bg-primary-blue"
      }`}
      {...rest}
    >
      {isLoading ? <ClipLoader className="text-tertiary-gray" size={15} /> : text}
    </button>
  );
}
