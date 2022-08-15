<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
}
