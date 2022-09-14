<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'create:admin',
    description: 'Permet la création d\'un admin en cli',
)]
class CreateAdminCommand extends Command
{
    private $em;
    private $passwordHasher;


    public function __construct(EntityManagerInterface $em, UserPasswordHasherInterface $passwordHasher)
    {
        $this->em = $em;
        $this->passwordHasher = $passwordHasher;

        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            // ->addArgument('email', InputArgument::REQUIRED, 'Email admin')
            ->addArgument('email', InputArgument::REQUIRED, 'Email admin')
            ->addArgument('password', InputArgument::REQUIRED, 'Password admin')
            // ->addOption('test', InputOption::VALUE_OPTIONAL)
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $email = $input->getArgument('email');
        $password = $input->getArgument('password');

        $user = new User();

        $user->setEmail($email)
            ->setRoles(["ROLE_ADMIN"])
            ->setPassword(
                $this->passwordHasher->hashPassword($user, $password)
            );
        $this->em->persist($user);
        $this->em->flush();
        
        $io->success('Le compte admin '.$email.' a bien été créer');

        return Command::SUCCESS;
    }
}
