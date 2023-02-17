interface AddressCardProps {
  name: string;
  email: string;
}
const AddressCard = ({ name, email }: AddressCardProps) => (
  <a
    className="flex flex-row gap-2 rounded-full p-2 bg-gray-100 cursor-pointer transition-colors hover:bg-gray-300 items-center"
    href={`mailto:${email}`}
  >
    <div className="rounded-full outline-2 outline-white outline-dashed outline-offset-2">
      <img
        src={`/api/gravatar?email=${email}`}
        alt={email}
        className="w-8 h-8 rounded-full"
      />
    </div>
    <div className="px-2 flex">{name || email}</div>
  </a>
);

export default AddressCard;
