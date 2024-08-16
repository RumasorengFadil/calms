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
        $this->languageDataData = $languageData;
        $this->publisherData = $publisherData;
        $this->placeData = $placeData;
        $this->biblioData = $biblioData;
        $this->itemData = $itemData;
    }
    public function getAuthorData()
    {
        return $this->authorData;
    }

    public function getLanguageData()
    {
        return $this->languageData;
    }

    public function getPublisherData()
    {
        return $this->publisherData;
    }

    public function getPlaceData()
    {
        return $this->placeData;
    }

    public function getBiblioData()
    {
        return $this->biblioData;
    }

    public function getItemData()
    {
        return $this->itemData;
    }
}