import { Link, useParams } from "react-router-dom";
import chefs from "../../data/chefs";
import { confidenceLabel, humanize, relationTypeLabel, roleLabel } from "../../utils/labels";
import KakaoMap from "../../components/Map/KakaoMap";
import {
  Content,
  DetailAvatar,
  DetailHeader,
  DetailInfo,
  DetailSubtitle,
  DetailTitle,
  MainResponsive,
  Panel,
  PillLink,
  SectionBlock,
  SectionLabel,
  SectionList,
  SectionRow,
  SectionTitle,
  SectionValue,
  RestaurantGrid,
  RestaurantCard,
  RestaurantHeader,
  RestaurantMeta,
  RestaurantName,
  MapButton,
  ProgramsBlock,
} from "../../components/AppShell/AppShell.styled";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function ChefDetailPage() {
  const { chefSlug } = useParams();
  const chef = chefs.find((item) => item.slug === chefSlug);

  const getShowYear = (title: string) => {
    const matches = title.match(/\d{4}/g);
    if (!matches || matches.length === 0) {
      return 0;
    }
    return Math.max(...matches.map((value) => Number(value)));
  };

  if (!chef) {
    return (
      <MainResponsive>
        <Content>
          <Panel>
            <h1>셰프 정보를 찾을 수 없습니다</h1>
            <p>요청한 셰프가 등록되어 있지 않습니다.</p>
            <Link to="/apps/black-white-chef">셰프 목록으로 돌아가기</Link>
          </Panel>
        </Content>
      </MainResponsive>
    );
  }

  return (
    <MainResponsive>
      <Sidebar />
      <Content>
        <DetailHeader>
          <DetailAvatar
            role="img"
            aria-label={chef.profile.image.alt}
            style={{ backgroundImage: `url(${chef.profile.image.src})` }}
          />
          <DetailInfo>
            <DetailTitle>{chef.name.ko} 셰프</DetailTitle>
            <DetailSubtitle>{chef.profile.oneLiner}</DetailSubtitle>
            <DetailSubtitle>{chef.profile.bio}</DetailSubtitle>
            <div>
              <PillLink to="/apps/black-white-chef" aria-label="셰프 목록으로 이동">
                목록으로
              </PillLink>
            </div>
          </DetailInfo>
        </DetailHeader>

        <SectionList>
          <ProgramsBlock>
            <SectionTitle>출연 프로그램</SectionTitle>
            {[...chef.appearance.shows]
              .sort((a, b) => getShowYear(b.title) - getShowYear(a.title))
              .map((show, index) => (
                <SectionRow key={`${show.title}-${index}`}>
                  <SectionValue>
                    {show.title} - {roleLabel[show.role] ?? show.role}
                  </SectionValue>
                </SectionRow>
              ))}
          </ProgramsBlock>

          <SectionBlock>
            <SectionTitle>현재 운영중인 식당</SectionTitle>
            {chef.affiliation.restaurants.filter((restaurant) => restaurant.status === "operating")
              .length === 0 ? (
              <SectionValue>등록된 매장이 없습니다.</SectionValue>
            ) : (
              <RestaurantGrid>
                {chef.affiliation.restaurants
                  .filter((restaurant) => restaurant.status === "operating")
                  .map((restaurant) => {
                    const kakaoQuery = encodeURIComponent(restaurant.address.full);
                    const kakaoUrl = `https://map.kakao.com/?q=${kakaoQuery}`;
                    return (
                      <RestaurantCard key={restaurant.id}>
                        <RestaurantHeader>
                          <RestaurantName>{restaurant.name}</RestaurantName>
                          <RestaurantMeta>
                            {humanize(roleLabel[restaurant.role] ?? restaurant.role)}
                          </RestaurantMeta>
                          <RestaurantMeta>
                            {humanize(restaurant.address.area ?? "")} {restaurant.address.full}
                          </RestaurantMeta>
                        </RestaurantHeader>
                        <KakaoMap address={restaurant.address.full} title={restaurant.name} />
                        <MapButton
                          href={kakaoUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${restaurant.name} 카카오맵 새창 열기`}
                        >
                          카카오맵 새창 보기
                        </MapButton>
                      </RestaurantCard>
                    );
                  })}
              </RestaurantGrid>
            )}
          </SectionBlock>

          <SectionBlock>
            <SectionTitle>다른 셰프와의 관계</SectionTitle>
            {Object.values(chef.relations).length === 0 ? (
              <SectionValue>등록된 관계가 없습니다.</SectionValue>
            ) : (
              Object.values(chef.relations).map((relation, index) => (
                <SectionRow key={`${relation.type}-${index}`}>
                  <SectionValue>{relation.context}</SectionValue>
                  <SectionLabel>유형: {relationTypeLabel[relation.type] ?? relation.type}</SectionLabel>
                  <SectionLabel>
                    신뢰도: {confidenceLabel[relation.confidence] ?? relation.confidence}
                  </SectionLabel>
                </SectionRow>
              ))
            )}
          </SectionBlock>

          {chef.links.social.youtube ? (
            <SectionBlock>
              <SectionTitle>유튜브 채널</SectionTitle>
              <SectionRow>
                <SectionValue>{chef.links.social.youtube}</SectionValue>
                <SectionLabel>개인 채널</SectionLabel>
              </SectionRow>
            </SectionBlock>
          ) : null}
        </SectionList>
      </Content>
    </MainResponsive>
  );
}
