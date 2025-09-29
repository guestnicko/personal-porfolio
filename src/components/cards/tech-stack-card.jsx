export default function TechStackCard({ logo }) {
  return (
    <>
      <div className="max-w-[300px] max-h-[100px]">
        <img
          src={"../src/assets/" + logo}
          alt=""
          className="object-fit max-h-[100px]"
        />
      </div>
    </>
  );
}
