<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class GalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => 1,
            'category_id' => 1,
            'name' => $this->faker->jobTitle,
            'image' => $this->faker->image('public/storage/gallery', 640, 480),
        ];
    }
}
