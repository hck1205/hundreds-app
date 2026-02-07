import { Link } from "react-router-dom";
import type { ChefProfile } from "../../types/chef";
import { humanize } from "../../utils/labels";
import {
  CardBody,
  CardFooter,
  CardMedia,
  CardMeta,
  CardName,
  CardResponsive,
  CardSignature,
  Grid,
  Tag,
} from "../AppShell/AppShell.styled";

type ChefGridProps = {
  chefs: ChefProfile[];
};

export default function ChefGrid({ chefs }: ChefGridProps) {
  return (
    <Grid>
      {chefs.map((chef) => (
        <CardResponsive
          as={Link}
          to={`chefs/${chef.slug}`}
          key={chef.id}
          aria-label={`${chef.name.ko} 셰프 상세 보기`}
        >
          <CardMedia
            role="img"
            aria-label={chef.profile.image.alt}
            style={{ backgroundImage: `url(${chef.profile.image.src})` }}
          />
          <CardBody>
            <CardMeta>{chef.profile.specialties.map(humanize).join(" / ")}</CardMeta>
            <CardName>{chef.name.ko}</CardName>
            <CardSignature>{chef.profile.oneLiner}</CardSignature>
            <CardFooter>
              <span>{chef.profile.tags.slice(0, 2).join(" · ")}</span>
              <span>{humanize(chef.affiliation.restaurants[0]?.address.area ?? "")}</span>
            </CardFooter>
          </CardBody>
        </CardResponsive>
      ))}
    </Grid>
  );
}
