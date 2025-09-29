export default function SkillCard({ label, logo }) {
  return (
    <>
      <div className="flex align-items justify-center">
        <img
          src={"../src/assets/" + logo}
          alt=""
          className="max-w-[100px] max-h-[100px]"
        />
        <span>{label}</span>
      </div>
    </>
  );
}
