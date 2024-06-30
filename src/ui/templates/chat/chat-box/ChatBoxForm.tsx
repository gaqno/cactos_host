import { Icon } from "@iconify/react";

export default function ChatBoxForm() {

  return (
    <div className="p-2">
      <label className="form-control ">
        <div className="label">
          <span className="label-text">Escreva sua pergunta</span>
          <span className="label-text-alt flex flex-row gap-1">
            <button className="btn btn-xs btn-outline btn-circle">?</button>
            <button className="btn btn-xs btn-outline btn-circle">
              <Icon icon="bx:send" />
            </button>
          </span>
        </div>
        <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
        <div className="label">
          <span className="label-text-alt">
            <span>0</span>
            <span> / </span>
            <span>300</span>
          </span>
          <span className="label-text-alt">Alt label</span>
        </div>
      </label>
    </div>
  );
}