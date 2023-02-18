import AddressCard from "@/components/addressCard";
import { ClockIcon } from "@heroicons/react/24/outline";
import type { EmailAddress } from "mailparser";

interface HeaderProps {
  subject: string;
  time?: Date;
  senders: EmailAddress[];
  // receivers: EmailAddress[];
}

const Header = ({ subject, senders, time }: HeaderProps) => (
  <div className="flex flex-col py-4">
    {/*Subject & Time*/}
    <div className="flex flex-col lg:flex-row py-4 justify-between">
      <h1 className="flex text-4xl font-bold">{subject}</h1>

      {time && (
        <div className="flex items-center gap-1">
          <ClockIcon className="w-5 h-5" />
          <time
            dateTime={time.toISOString()}
            className={"text-sm text-gray-500"}
          >
            {time.toLocaleString()}
          </time>
        </div>
      )}
    </div>

    {/*Sender & Receiver*/}
    <div className="flex flex-row">
      {/*Sender*/}
      <div>
        {senders.map((sender) => (
          <AddressCard
            key={sender.address}
            name={sender.name}
            email={sender.address || ""}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Header;
