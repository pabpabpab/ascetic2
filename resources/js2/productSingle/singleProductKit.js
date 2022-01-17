import el from "../el";
import DesktopLargePhotoMaker from "./desktop/largePhotoMaker";
import DesktopMainPhotoChanger from "./desktop/mainPhotoChanger";
import DesktopLargePhotoViewer from "./desktop/largePhotoViewer";
import DesktopSmallPhotoScroller from "./desktop/smallPhotoScroller";
import MobileLargePhotoMaker from "./mobile/mobileLargePhotoMaker";
import MobileLargePhotoScroller from "./mobile/mobileLargePhotoScroller";
import QuickProductDestructor from "../productQuickViewer/quickProductDestructor";

export default function singleProductKit() {

        const largePhotoScrollRightButton = el('#largePhotoScrollRightButton');
        let largePhotoScrollRightButtonVisibility = false;
        if (largePhotoScrollRightButton) {
            largePhotoScrollRightButtonVisibility = largePhotoScrollRightButton.getBoundingClientRect().x > 0;
        }

        if (!largePhotoScrollRightButtonVisibility) {
            if (el('#smallPhotos')) {
                new DesktopLargePhotoMaker();
                new DesktopMainPhotoChanger(); // change main photo by small photo
            }
            if (el('#mainPhotoContainer')) {
                new DesktopLargePhotoViewer();
            }
            if (el('#smallPhotos-scrollButtonDown')) {
                new DesktopSmallPhotoScroller();
            }
        }

        if (largePhotoScrollRightButtonVisibility) {
            if (el('#smallPhotos')) {
                new MobileLargePhotoMaker();
                new MobileLargePhotoScroller();
            }
        }

        if (el('.quick_view_manager__collapse_icon')) {
            new QuickProductDestructor();
        }

}




