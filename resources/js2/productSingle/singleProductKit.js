import DesktopLargePhotoMaker from "./desktop/largePhotoMaker";
import DesktopMainPhotoChanger from "./desktop/mainPhotoChanger";
import DesktopLargePhotoViewer from "./desktop/largePhotoViewer";
import DesktopSmallPhotoScroller from "./desktop/smallPhotoScroller";
import MobileLargePhotoMaker from "./mobile/mobileLargePhotoMaker";
import MobileLargePhotoScroller from "./mobile/mobileLargePhotoScroller";
import QuickProductDestructor from "../productQuickViewer/quickProductDestructor";
import needMobileVersion from './needMobileVersionOfSingleProductKit';

export default function singleProductKit() {

    if (!needMobileVersion()) {
        new DesktopLargePhotoMaker();
        new DesktopMainPhotoChanger();
        new DesktopLargePhotoViewer();
        new DesktopSmallPhotoScroller();
    }

    if (needMobileVersion()) {
        new MobileLargePhotoMaker();
        new MobileLargePhotoScroller();
    }

    new QuickProductDestructor();
}




