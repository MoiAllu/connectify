import React, { useState, useEffect } from "react";
import { pusherClient } from "../../lib/pusher";
import { find } from "lodash";
import deleteMessageHandler from "../../lib/Utilities/messages/deleteMessageHandler";

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
  const [changeState, setChangeState] = useState(false);
  const [deleteResponse, setDeleteResponse] = useState(undefined);

  const deleteHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChangeState(true);

    const response = await deleteMessageHandler({
      messageId,
      userId,
      conversationId,
    });
    setDeleteResponse(response);
    props.setDeleteMessage({ response });
  };

  useEffect(() => {
    if (deleteResponse) {
      console.log(deleteResponse);
      const messageHandler = (data: any) => {
        props.setDeleteBackdropHandler(false);
        props.setAllMessages((prev: any) => {
          if (find(prev.message, { id: data.id })) {
            return {
              ...prev,
              message: prev.message.filter(
                (message: any) => message.id !== data.id
              ),
            };
          } else return { ...prev };
        });
      };
      // const conversationIdToDelete = "deleteChat" + conversationId;
      // pusherClient.subscribe(conversationIdToDelete);
      pusherClient.bind("deleteChat", messageHandler);
      console.log(
        "deleteChat",
        pusherClient.bind("deleteChat", messageHandler)
      );
      return () => {
        // pusherClient.unsubscribe(conversationIdToDelete);
        pusherClient.unbind("deleteChat", messageHandler);
      };
    }
  }, [deleteResponse, messageId, userId, conversationId]);

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-md p-4">
      <h1 className="text-xl font-semibold">Delete Message</h1>
      <p className="text-sm text-gray-500">
        Are you sure you want to delete this message?
      </p>
      <div className="flex gap-2 mt-4">
        <button
          className={`bg-red-500 text-white px-4 py-2 rounded-md ${
            changeState
              ? "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-600"
              : ""
          }`}
          disabled={changeState}
          onClick={deleteHandler}
        >
          {changeState ? "Deleting" : "Delete"}
        </button>
        {!changeState && (
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={() => props.setDeleteBackdropHandler(false)}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default DeleteMessage;
