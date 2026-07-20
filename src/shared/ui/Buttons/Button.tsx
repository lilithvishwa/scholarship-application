interface ButtonProps {
  name: string;
  onClick?(): void;
}

function Button({ name }: ButtonProps) {
  return (
    <button
      type="submit"
      className="py-2 w-full rounded-xs mt-2 action-button bg-cohere-black text-on-primary"
    >
      {name}
    </button>
  );
}

export default Button;
