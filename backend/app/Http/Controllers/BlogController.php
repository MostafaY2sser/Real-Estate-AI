<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index() {
        return response()->json(Blog::all());
    }

    public function store(Request $request) {
        $data = $request->validate([
            'title' => 'required|string',
            'image' => 'required|string',
            'date' => 'required|date',
            'summary' => 'required|string',
            'content' => 'nullable|string',
        ]);

        $blog = Blog::create($data);
        return response()->json($blog);
    }

    public function show($id) {
        $blog = Blog::findOrFail($id);
        return response()->json($blog);
    }

    public function update(Request $request, $id) {
        $blog = Blog::findOrFail($id);
        $blog->update($request->all());
        return response()->json($blog);
    }

    public function destroy($id) {
        $blog = Blog::findOrFail($id);
        $blog->delete();
        return response()->json(['message' => 'Blog deleted successfully']);
    }
}
