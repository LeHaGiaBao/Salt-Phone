<?php

namespace App\Http\Controllers;

use App\Models\Dienthoai;
use Illuminate\Http\Request;

class DienthoaiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dienthoai = Dienthoai::all();
        return response()->json($dienthoai);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'tendienthoai'  => 'required',
            'hinhanh'  => 'required',
            'giadienthoai'  => 'required',
            'manhinh'  => 'required',
            'camerasau'  => 'required',
            'cameratruoc'  => 'required',
            'cpu'  => 'required',
            'hedieuhanh'  => 'required',
            'ram'  => 'required',
            'bonho'  => 'required',
            'dungluongpin'  => 'required',
            'soluong'  => 'required',
            'hangdienthoai'  => 'required',
        ]);

        if (Dienthoai::where($request->all())->count() > 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Dien thoai da ton tai!',
            ], 200);
        } else {
            $dienthoai = Dienthoai::create($request->all());

            return response()->json([
                'message' => 'Dien thoai tao thanh cong',
                'Dien thoai' => $dienthoai
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dienthoai  $dienthoai
     * @return \Illuminate\Http\Response
     */
    public function show(Dienthoai $dienthoai)
    {
        return response()->json($dienthoai);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dienthoai  $dienthoai
     * @return \Illuminate\Http\Response
     */
    public function edit(Dienthoai $dienthoai)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dienthoai  $dienthoai
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Dienthoai $dienthoai)
    {
        if (Dienthoai::where($request->all())->count() < 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Dien thoai khong ton tai!',
            ], 200);
        } else {
            $dienthoai->update($request->all());
            return response()->json($dienthoai);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dienthoai  $dienthoai
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dienthoai $dienthoai)
    {
        if (!$dienthoai) {
            return response()->json([
                'Status' => true,
                'Message' => "Dien thoai khong ton tai!",
            ], 200);
        } else {
            $dienthoai->delete();
            return response()->json([
                'Status' => true,
                'Message' => "Xoa dien thoai thanh cong!",
            ], 200);
        }
    }
}
