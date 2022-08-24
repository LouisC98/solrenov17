 <?php

// namespace App\Components;

// use App\Repository\PhotoRepository;
// use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
// use Symfony\UX\LiveComponent\DefaultActionTrait;

// #[AsLiveComponent('photos_component')]
class PhotosComponent {
    // use DefaultActionTrait;

    public function search(PhotoRepository $photoRepository) {
        return rand(0, 1000);
    }
}