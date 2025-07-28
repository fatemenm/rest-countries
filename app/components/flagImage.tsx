import Image from "next/image";

interface FlagImageProps {
  containerClass: string;
  src: string;
  alt: string;
  imageClass: string;
}

export default function FlagImage({
  containerClass,
  src,
  alt,
  imageClass,
}: FlagImageProps) {
  return (
    <div className={`relative aspect-[5/3] w-full ${containerClass}`}>
      <Image fill priority src={src} alt={alt} className={`${imageClass}`} />
    </div>
  );
}
