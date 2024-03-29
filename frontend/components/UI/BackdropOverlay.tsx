const Backdrop = ({ children, handler }: any) => {
  const backdropHanlder = (e: any) => {
    if (e.target.id === "backdrop") handler(false);
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm bottom-0 flex justify-center items-center rounded-md"
      onClick={backdropHanlder}
      id="backdrop"
    >
      <div>{children}</div>
    </div>
  );
};
const BackdropOverlay = ({ children, handler }: any) => {
  return <Backdrop handler={handler}>{children}</Backdrop>;
};

export default BackdropOverlay;
