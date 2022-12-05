<?php

namespace App\Http\Controllers;
use App\Models\Cursos;
use Illuminate\Http\Request;

class CursoController extends Controller
{
    public function index()
    {
        $Cursos=Cursos::all();
        foreach($Cursos as $Cursos)
        { 
          if($Cursos->foto!=null)
          {
           $Cursos->foto=stream_get_contents($Cursos->foto);

          }

        }
        return $Cursos;
    }
    public function store(Request $request)
    {
        $nuevo = new Cursos();
        $nuevo->titulo = $request->titulo;
        $nuevo->foto = $request->foto;
        $nuevo->descripcion = $request->descripcion;
        $nuevo->save();
        
        return response()->json(["mensaje"=>"Creado satisfactoriamente"], 201);
    }

    public function update(Request $request, $id)
    {
        $nuevo = Cursos::find($id);
        $nuevo->titulo = $request->titulo;
        $nuevo->foto = $request->foto;
        $nuevo->descripcion = $request->descripcion;
        $nuevo->save();
        
        return response()->json(["mensaje"=>"Modificado satisfactoriamente"], 201);
    }
    public function destroy($id)
    {
        return Cursos::destroy($id);
    }
}
