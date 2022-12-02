<?php

namespace App\Http\Controllers;

use App\Models\Taikhoanadmin;
use Illuminate\Http\Request;

class TaikhoanadminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $taikhoanadmin = Taikhoanadmin::all();
        return response()->json($taikhoanadmin);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'email' => 'required',
            'matkhau' => 'required',
        ]);

        if (Taikhoanadmin::where($request->all())->count() > 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Tai khoan da ton tai!',
            ], 200);
        } else {
            $taikhoanadmin = Taikhoanadmin::create($request->all());

            return response()->json([
                'message' => 'Tai khoan tao thanh cong',
                'Tai khoan' => $taikhoanadmin
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Taikhoanadmin  $taikhoanadmin
     * @return \Illuminate\Http\Response
     */
    public function show(Taikhoanadmin $taikhoanadmin)
    {
        return response()->json($taikhoanadmin);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Taikhoanadmin  $taikhoanadmin
     * @return \Illuminate\Http\Response
     */
    public function edit(Taikhoanadmin $taikhoanadmin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Taikhoanadmin  $taikhoanadmin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Taikhoanadmin $taikhoanadmin)
    {
        if (Taikhoanadmin::where($request->all())->count() < 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Tai khoan khong ton tai!',
            ], 200);
        } else {
            $taikhoanadmin->update($request->all());
            return response()->json($taikhoanadmin);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Taikhoanadmin  $taikhoanadmin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Taikhoanadmin $taikhoanadmin)
    {
        if (!$taikhoanadmin) {
            return response()->json([
                'Status' => true,
                'Message' => "Tai khoan khong ton tai!",
            ], 200);
        } else {
            $taikhoanadmin->delete();
            return response()->json([
                'Status' => true,
                'Message' => "Xoa tai khoan thanh cong!",
            ], 200);
        }
    }
}
