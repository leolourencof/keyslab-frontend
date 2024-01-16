export default function Anchor({ text, href, ...rest }: Readonly<{ text: string; href: string }>) {
  return (
    <span className="text-sm text-primary-gray font-normal underline decoration-solid">
      <a href={href} {...rest}>
        {text}
      </a>
    </span>
  );
}
