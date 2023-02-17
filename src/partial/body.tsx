interface BodyProps {
  html: string;
}

const Body = ({ html }: BodyProps) => (
  <div className="p-2">
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  </div>
);

export default Body;
