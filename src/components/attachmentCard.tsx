import {
  PhotoIcon,
  MusicalNoteIcon,
  VideoCameraIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";

interface AttachmentCardIconProps {
  type: string;
  className: string;
}
const AttachmentCardIcon = ({ type, className }: AttachmentCardIconProps) =>
  type === "image" ? (
    <PhotoIcon className={className} />
  ) : type === "audio" ? (
    <MusicalNoteIcon className={className} />
  ) : type === "video" ? (
    <VideoCameraIcon className={className} />
  ) : (
    <PaperClipIcon className={className} />
  );

const sizeUnits = ["Bytes", "KB", "MB", "GB"]; // No more required
const parseSize = (size: number): string => {
  let unitIndex = 0; // Bytes
  let parsedSize = size;
  while (parsedSize > 1024 && unitIndex < sizeUnits.length - 1) {
    unitIndex++;
    parsedSize /= 1024;
  }
  return `${parsedSize.toFixed(2)} ${sizeUnits[unitIndex]}`;
};

interface AttachmentsCardProps {
  filename?: string;
  contentType: string;
  size: number; // Bytes
  content: number[]; // The only method
}
const AttachmentCard = ({
  filename,
  contentType,
  size,
  content,
}: AttachmentsCardProps) => {
  const data = new Blob([new Uint8Array(content)], { type: contentType });
  const link = URL.createObjectURL(data);

  return (
    <a
      className="flex flex-row gap-2 rounded-full px-4 py-2 bg-gray-100 cursor-pointer transition-colors hover:bg-gray-300 items-center divide-x"
      href={link}
      download={filename}
    >
      <div className="flex flex-row items-center">
        <div className="p-1">
          <AttachmentCardIcon
            type={contentType.split("/")[0]}
            className="w-8 h-8"
          />
        </div>
        <div className="flex flex-col px-2 items-end">
          <div>{filename || ""}</div>
          <div className="text-xs">{parseSize(size)}</div>
        </div>
      </div>
    </a>
  );
};

export default AttachmentCard;
