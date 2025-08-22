export default function SomsaVideoSection() {
  return (
    <div className="w-full  py-12 px-4">
      <div className="w-full mx-auto aspect-video ">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/bHZHh84notI?si=JpYcjTgIwobutty7"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
