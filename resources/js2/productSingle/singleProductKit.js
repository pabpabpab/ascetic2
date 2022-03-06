import DesktopLargePhotoMaker from "./desktop/largePhotoMaker";
import DesktopMainPhotoChanger from "./desktop/mainPhotoChanger";
import DesktopLargePhotoViewer from "./desktop/largePhotoViewer";
import DesktopSmallPhotoScroller from "./desktop/smallPhotoScroller";
import MobileLargePhotoMaker from "./mobile/mobileLargePhotoMaker";
import MobileLargePhotosScrollerByClick from "./mobile/mobileLargePhotosScrollerByClick";
import MobileLargePhotosScrollerBySwipe from "./mobile/mobileLargePhotosScrollerBySwipe";
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
        new MobileLargePhotosScrollerByClick();
        new MobileLargePhotosScrollerBySwipe();
    }

    new QuickProductDestructor();
}




