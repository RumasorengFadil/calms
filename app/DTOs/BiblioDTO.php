<?php

namespace App\DTOs;

class BiblioDTO{
    private $authorData;
    private $languageData;
    private $publisherData;
    private $placeData;
    private $biblioData;
    private $itemData;

    public function __construct($authorData, $languageData, $publisherData, $placeData, $biblioData, $itemData){
        $this->authorData = $authorData;
        $this->languageData= $languageData;
        $this->publisherData = $publisherData;
        $this->placeData = $placeData;
        $this->biblioData = $biblioData;
        $this->itemData = $itemData;
    }
    public function getAuthorData(): array
    {
        return $this->authorData;
    }

    public function getLanguageData(): array
    {
        return $this->languageData;
    }

    public function getPublisherData(): array
    {
        return $this->publisherData;
    }

    public function getPlaceData(): array
    {
        return $this->placeData;
    }

    public function getBiblioData(): array
    {
        return $this->biblioData;
    }

    public function getItemData(): array
    {
        return $this->itemData;
    }
}