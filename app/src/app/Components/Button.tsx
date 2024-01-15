export default function Button({ text, ...rest }: Readonly<{ text: string }>) {
  return (
    <button
      type="submit"
      className="bg-primary-blue text-tertiary-gray text-sm font-semibold p-4 rounded-full w-full my-5"
      {...rest}
    >
      {text}
    </button>
  );
}
