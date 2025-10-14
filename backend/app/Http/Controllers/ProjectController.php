<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{
    /**
     * ✅ عرض كل المشاريع
     */
    public function index()
    {
        return response()->json(Project::all());
    }

    /**
     * ✅ تخزين مشروع جديد
     */
    public function store(Request $request)
    {
        // التحقق من البيانات
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // لو الصورة موجودة، خزنها داخل مجلد public/projects
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projects', 'public');
            $data['image'] = $path;
        }

        // إنشاء المشروع في قاعدة البيانات
        $project = Project::create($data);

        return response()->json($project, 201);
    }

    /**
     * ✅ عرض مشروع واحد حسب ID
     */
    public function show($id)
    {
        $project = Project::findOrFail($id);
        return response()->json($project);
    }

    /**
     * ✅ تحديث بيانات المشروع
     */
    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $data = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'location' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // لو الصورة الجديدة موجودة نحذف القديمة ونرفع الجديدة
        if ($request->hasFile('image')) {
            if ($project->image) {
                Storage::disk('public')->delete($project->image);
            }

            $path = $request->file('image')->store('projects', 'public');
            $data['image'] = $path;
        }

        $project->update($data);

        return response()->json($project);
    }

    /**
     * ✅ حذف المشروع
     */
    public function destroy($id)
    {
        $project = Project::findOrFail($id);

        // حذف الصورة من التخزين لو موجودة
        if ($project->image) {
            Storage::disk('public')->delete($project->image);
        }

        $project->delete();

        return response()->json(['message' => 'Project deleted successfully']);
    }
}
