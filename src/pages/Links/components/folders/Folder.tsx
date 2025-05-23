type FolderProps = {
  children: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Folder = ({ children, className, ...rest }: FolderProps) => {
  return (
    <button
      {...rest}
      className={`${className} border-primary cursor-pointer rounded-[5px] border px-3 py-2`}
    >
      {children}
    </button>
  );
};
export default Folder;
