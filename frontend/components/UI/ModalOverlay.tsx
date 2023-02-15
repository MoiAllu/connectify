const Backdrop = ({ children, setProfileButton }: any) => {
  const backdropHanlder = (e: any) => {
    if (e.target.id === "backdrop") setProfileButton(false);
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
const ModelOverlay = ({ children, setProfileButton }: any) => {
  return <Backdrop setProfileButton={setProfileButton}>{children}</Backdrop>;
};

export default ModelOverlay;
