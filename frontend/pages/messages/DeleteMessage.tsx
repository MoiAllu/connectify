import React from "react";
import deleteMessageHandler from "../../lib/Utilities/messages/deleteMessageHandler";
import { pusherClient } from "../../lib/pusher";
import { find } from "lodash";
type Props = {
  setDeleteBackdropHandler: React.Dispatch<React.SetStateAction<boolean>>;
  deleteMessageData: {
    userId: number;
    messageId: number;
    conversationId: number;
  };
  setAllMessages: React.Dispatch<React.SetStateAction<{}>>;
  deleteMessage: any;
  setDeleteMessage: React.Dispatch<React.SetStateAction<{}>>;
};

const DeleteMessage = (props: Props) => {
  const { userId, messageId, conversationId } = props.deleteMessageData;
  const [changeState, setChangeState] = React.useState(false);
  //Delete message from database
  //   React.useEffect(() => {
  //     console.log("changeState", changeState);
  //     const messageHandler = (data: any) => {
  //       props.setAllMessages((prev: any) => {
  //         if (find(prev.message, { id: data.id })) {
  //           console.log("Filter Array", {
  //             ...prev,
  //             message: prev.message.filter(
  //               (message: any) => message.id !== data.id
  //             ),
  //           });
  //           return {
  //             ...prev,
  //             message: prev.message.filter(
  //               (message: any) => message.id !== data.id
  //             ),
  //           };
  //         } else return { ...prev };
  //       });
  //     };
  //     const conversationid = "deleteChat" + conversationId;
  //     // console.log(conversationid);
  //     pusherClient.subscribe(conversationid);
  //     pusherClient.bind("deleteChat", messageHandler);
  //     return () => {
  //       pusherClient.unsubscribe(conversationid);
  //       pusherClient.unbind("deleteChat", messageHandler);
  //     };
  //   }, [changeState]);

  const deleteHandler = async (e: any) => {
    e.preventDefault();
    setChangeState(!changeState);
    const response = await deleteMessageHandler({
      messageId,
      userId,
      conversationId,
    });
    // console.log(response);
    props.setDeleteMessage({ response });
    props.setDeleteBackdropHandler(false);

    const messageHandler = (data: any) => {
      props.setAllMessages((prev: any) => {
        if (find(prev.message, { id: data.id })) {
          console.log("Filter Array", {
            ...prev,
            message: prev.message.filter(
              (message: any) => message.id !== data.id
            ),
          });
          return {
            ...prev,
            message: prev.message.filter(
              (message: any) => message.id !== data.id
            ),
          };
        } else return { ...prev };
      });
    };
    const conversationid = "deleteChat" + conversationId;
    // console.log(conversationid);
    pusherClient.subscribe(conversationid);
    pusherClient.bind("deleteChat", messageHandler);
    return () => {
      pusherClient.unsubscribe(conversationid);
      pusherClient.unbind("deleteChat", messageHandler);
    };
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-white rounded-md p-4">
        <h1 className="text-xl font-semibold">Delete Message</h1>
        <p className="text-sm text-gray-500">
          Are you sure you want to delete this message?
        </p>
        <div className="flex gap-2 mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={deleteHandler}
          >
            Delete
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={() => props.setDeleteBackdropHandler(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteMessage;
