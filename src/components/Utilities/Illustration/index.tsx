import React from 'react';
import { TIllustrations } from './types';

import Achievement from './variants/Achievement';
import Award from './variants/Award';
import Branding from './variants/Branding';
import CaseStudy from './variants/CaseStudy';
import ContentMarketing from './variants/ContentMarketing';
import DigitalMarketing from './variants/DigitalMarketing';
import Ecommerce from './variants/Ecommerce';
import Goal from './variants/Goal';
import GraphicDesign from './variants/GraphicDesign';
import MarketingTeam from './variants/MarketingTeam';
import Monitor from './variants/Monitor';
import Policy from './variants/Policy';
import Portfolio from './variants/Portfolio';
import Reward from './variants/Reward';
import SeoAndWeb from './variants/SeoAndWeb';
import SocialEngagement from './variants/SocialEngagement';
import Spaceship from './variants/Spaceship';
import Survey from './variants/Survey';
import Transparency from './variants/Transparency';

const VARIANTS = {
  Achievement,
  Award,
  Branding,
  CaseStudy,
  ContentMarketing,
  DigitalMarketing,
  Ecommerce,
  Goal,
  GraphicDesign,
  MarketingTeam,
  Monitor,
  Policy,
  Portfolio,
  Reward,
  SeoAndWeb,
  SocialEngagement,
  Spaceship,
  Survey,
  Transparency,
};

function Illustration(props: TIllustrations) {
  const { name, size = 128 } = props;
  const Illustration = VARIANTS[name];

  return <Illustration size={size} />;
}

export default Illustration;
