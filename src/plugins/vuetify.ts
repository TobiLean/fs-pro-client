import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import LasenaUnitedIcon from '../icons/LU.vue';
import DagadaRangersIcon from '../icons/DR.vue';
import RisingThundersIcon from '../icons/RT.vue';
import RainbowBoysIcon from '../icons/RB.vue';
import Khashiru94Icon from '../icons/K94.vue';
import BrickwallHadadIcon from '../icons/BWH.vue';
import EasdenFrydgelandIcon from '../icons/EF.vue';
import AlMoomoodIcon from '../icons/AM.vue';
import BinatoneFcIcon from '../icons/BFC.vue';
import GuttersbergUnitedIcon from '../icons/GU.vue';
import IvaniaBoysIcon from '../icons/IB.vue';
import LonenRaidUnited17Icon from '../icons/LRU17.vue';
import NewSimeoneMirrorsIcon from '../icons/NSM.vue';
import NorthernUnitedIcon from '../icons/NU.vue';
import SouthportRangersIcon from '../icons/SPR.vue';
import VendoorsteinAthleticIcon from '../icons/VAS.vue';
import ZanderDragonsIcon from '../icons/ZD.vue';
import AlShalakatIcon from '../icons/AS.vue';
import ACPhilamentia from '../icons/ACP.vue';
import RoyalPhilamentia from '../icons/RP.vue';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      LU: {
        component: LasenaUnitedIcon,
      },
      DR: {
        component: DagadaRangersIcon,
      },
      RT: {
        component: RisingThundersIcon,
      },
      RB: {
        component: RainbowBoysIcon,
      },
      K94: {
        component: Khashiru94Icon,
      },
      BWH: {
        component: BrickwallHadadIcon,
      },
      EF: {
        component: EasdenFrydgelandIcon,
      },
      AM: {
        component: AlMoomoodIcon,
      },
      BFC: {
        component: BinatoneFcIcon,
      },
      GU: {
        component: GuttersbergUnitedIcon,
      },
      IB: {
        component: IvaniaBoysIcon,
      },
      LRU17: {
        component: LonenRaidUnited17Icon,
      },
      NSM: {
        component: NewSimeoneMirrorsIcon,
      },
      NU: {
        component: NorthernUnitedIcon,
      },
      SPR: {
        component: SouthportRangersIcon,
      },
      VAS: {
        component: VendoorsteinAthleticIcon,
      },
      ZD: {
        component: ZanderDragonsIcon,
      },
      AS: {
        component: AlShalakatIcon,
      },
      ACP: {
        component: ACPhilamentia,
      },
      RP: {
        component: RoyalPhilamentia,
      },
    },
  },
});
