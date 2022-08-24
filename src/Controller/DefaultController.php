<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\PhotoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
    #[Route('/galerie', name: 'galerie')]
    public function galerie(): Response
    {
        return $this->render('galerie/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    #[Route('/galerie/all', name: 'all_photos')]
    public function allPhotos(PhotoRepository $photoRepository)
    {   
        $photos = $photoRepository->allPhotosJson();

        return $this->json(json_encode($photos));
    }

    #[Route('/galerie/{id}', name: 'photos_by_category')]
    public function photosByCategory(string $id, PhotoRepository $photoRepository): JsonResponse
    {   
        $photos = $photoRepository->searchByCategoryJson($id);

        return $this->json(json_encode($photos));
    }

    #[Route('/categories', name: 'all_categories')]
    public function allCategories(CategoryRepository $categoryRepository): JsonResponse
    {   
        $categories = $categoryRepository->findAllCategoryName();

        return $this->json(json_encode($categories));
    }

    #[Route('/about', name: 'about')]
    public function about(): Response
    {
        return $this->render('about/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    #[Route('/contact', name: 'contact')]
    public function contact(): Response
    {
        return $this->render('contact/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
}
