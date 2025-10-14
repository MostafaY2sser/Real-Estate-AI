<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index() {
        return response()->json(Review::all());
    }

    public function store(Request $request) {
        $data = $request->validate([
            'name' => 'required|string',
            'image' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string',
        ]);

        $review = Review::create($data);
        return response()->json($review);
    }

    public function show($id) {
        $review = Review::findOrFail($id);
        return response()->json($review);
    }

    public function update(Request $request, $id) {
        $review = Review::findOrFail($id);
        $review->update($request->all());
        return response()->json($review);
    }

    public function destroy($id) {
        $review = Review::findOrFail($id);
        $review->delete();
        return response()->json(['message' => 'Review deleted successfully']);
    }
}
