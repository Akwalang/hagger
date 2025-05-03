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
  [ArtName.BroomBattle2]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_019} />
  ),
  [ArtName.AlienMonocycle]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_008} />
  ),
  [ArtName.Flamethrower]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_013} />
  ),
  [ArtName.Flamethrower2]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_033} />
  ),
  [ArtName.Recreation]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_004} />
  ),
  [ArtName.Motorcycle]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_006} />
  ),
  [ArtName.Doubts]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_003} />
  ),
  [ArtName.Queen]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_015} />
  ),
  [ArtName.RunAway]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_014} />
  ),
  [ArtName.ChickenOut]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_030} />
  ),
  [ArtName.Attack]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_018} />
  ),
  [ArtName.Siren]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_022} />
  ),
  [ArtName.Flying]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_028} />
  ),
  [ArtName.Swimming]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_023} />
  ),
  [ArtName.Defeated]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_001} />
  ),
  [ArtName.Chase]: () => (
    <SvgImage src={"/arts/" + ArtFileName.Art_012} />
  ),
};

export const Composition: React.FC<CompositionProps> = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {Scenes[props.name]()}
    </div>
  );
};
