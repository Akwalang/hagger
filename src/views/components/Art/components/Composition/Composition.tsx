import { SvgImage } from "../../../SvgImage/SvgImage";
import { ArtName, ArtFileName } from "../../enums";

interface CompositionProps {
  name: ArtName;
}

const Scenes: Record<ArtName, () => React.ReactElement> = {
  [ArtName.Landing]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_017} />
  ),
  [ArtName.BroomBattle]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_009} />
  ),
  [ArtName.AlienMonocycle]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_008} />
  ),
  [ArtName.Flamethrower]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_013} />
  ),
};

export const Composition: React.FC<CompositionProps> = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {Scenes[props.name]()}
    </div>
  );
};
