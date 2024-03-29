interface HeadingProps {
    title: string;
  }
  
  export const Heading = ({ title }: HeadingProps) => {
    return (
      <div>
        <h2 className="text-2xl py-7 tracking-tight">{title}</h2>
      </div>
    );
  };