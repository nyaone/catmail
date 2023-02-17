import type { Attachment } from "mailparser";
import AttachmentCard from "@/components/attachmentCard";

interface FooterProps {
  attachments: Attachment[];
}
const Footer = ({ attachments }: FooterProps) => (
  <footer className="py-2">
    {/*Attachments*/}
    <div className="flex">
      {attachments.map((attachment) => (
        <AttachmentCard
          key={attachment.checksum}
          filename={attachment.filename}
          contentType={attachment.contentType}
          size={attachment.size}
          content={(attachment.content as any).data} // Actually this type definition is wrong,
          // it's not that buffer in modern definitions.
          // So we need to parse it before actual use.
        />
      ))}
    </div>
  </footer>
);

export default Footer;
