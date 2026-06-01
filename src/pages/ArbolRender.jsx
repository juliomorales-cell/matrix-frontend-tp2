import SectionHeader from '../components/SectionHeader'
import SEO from '../components/SEO'

const ArbolRender = () => {
	return (
		<>
			<SEO
				title="Árbol Render"
				description="Representación esquemática de los componentes en la matrix."
			/>
			<div className="flex flex-col gap-6 pb-10">
				<SectionHeader
					title="ÁRBOL DE RENDERIZADO"
					subtitle="Representación esquemática de la jerarquía de componentes del sistema."
				/>
				<div className="bg-black/90 border border-green-900 rounded p-8 overflow-x-auto shadow-inner">
					<ul className="text-green-500 font-mono text-sm leading-relaxed space-y-2">
						<li className="font-bold text-lg text-[#00FF41] flex items-center gap-2">
							<span>&lt;App /&gt;</span>{' '}
							<span className="text-green-800 text-xs font-normal">
								(Componente Raíz)
							</span>
						</li>
						<li>
							<ul className="pl-8 mt-2 space-y-2 border-l-2 border-green-900/50">
								<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-3">
									&lt;Router&gt;{' '}
									<span className="text-green-800 text-xs ml-2">
										(React Router DOM)
									</span>
									<ul className="pl-8 mt-2 space-y-2 border-l-2 border-green-900/50">
										<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-3 text-white">
											&lt;MatrixRain /&gt;{' '}
											<span className="text-green-800 text-xs ml-2">
												(Efecto de fondo global)
											</span>
										</li>

										<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-3 text-white">
											Sidebar{' '}
											<span className="text-green-800 text-xs ml-2">
												(&lt;nav&gt;)
											</span>
											<ul className="pl-8 mt-2 space-y-1 border-l-2 border-green-900/50 text-green-600">
												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2.5">
													&lt;NavItem to="/" /&gt;
													(Inicio)
												</li>
												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2.5">
													&lt;NavItem
													to="/integrantes" /&gt;
													(Tripulación)
												</li>
												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2.5">
													&lt;NavItem to="/datos"
													/&gt; (Archivos JSON)
												</li>
												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2.5">
													&lt;NavItem to="/api" /&gt;
													(Red Externa)
												</li>
												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2.5">
													&lt;NavItem to="/galeria"
													/&gt; (Galería)
												</li>
												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2.5">
													&lt;NavItem to="/bitacora"
													/&gt; (Bitácora)
												</li>
												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2.5">
													&lt;NavItem to="/arbol"
													/&gt; (Árbol Render)
												</li>
											</ul>
										</li>

										<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-3 text-white">
											&lt;Routes&gt;{' '}
											<span className="text-green-800 text-xs ml-2">
												(Contenedor de Vistas)
											</span>
											<ul className="pl-8 mt-2 space-y-2 border-l-2 border-green-900/50 text-green-500">
												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-3 hover:text-[#00FF41] transition-colors">
													&lt;Home /&gt;{' '}
													<span className="text-green-800 text-xs ml-2">
														(Panel Central)
													</span>
													<ul className="pl-8 mt-1 space-y-1 border-l-2 border-green-900/50 text-green-700 text-xs">
														<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2">
															Botón de Conexión
														</li>
														<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2">
															Lista Tarjetas
															(Tripulantes)
														</li>
													</ul>
												</li>

												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-3 hover:text-[#00FF41] transition-colors">
													&lt;Tripulacion /&gt;{' '}
													<span className="text-green-800 text-xs ml-2">
														(Túnel Selección)
													</span>
												</li>

												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-3 hover:text-[#00FF41] transition-colors">
													&lt;PerfilTripulante /&gt;{' '}
													<span className="text-green-800 text-xs ml-2">
														(Enrutador Dinámico)
													</span>
													<ul className="pl-8 mt-1 space-y-1 border-l-2 border-green-900/50 text-green-700 text-xs">
														<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2">
															&lt;PerfilMartin
															/&gt; |
															&lt;PerfilRodrigo
															/&gt; |
															&lt;PerfilFacundo
															/&gt;
															<ul className="pl-8 mt-1 space-y-1 border-l-2 border-green-900/50 text-green-800 text-[10px]">
																<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-1.5">
																	&lt;PerfilBase
																	/&gt;
																	(Plantilla
																	UI)
																</li>
															</ul>
														</li>
													</ul>
												</li>

												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-3 hover:text-[#00FF41] transition-colors">
													&lt;ArchivosJSON /&gt;{' '}
													<span className="text-green-800 text-xs ml-2">
														(Explorador Local)
													</span>
													<ul className="pl-8 mt-1 space-y-1 border-l-2 border-green-900/50 text-green-700 text-xs">
														<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2">
															Input Search
														</li>
														<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2">
															&lt;table&gt; /
															&lt;pre&gt; (Vista
															JSON)
														</li>
													</ul>
												</li>

												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-3 hover:text-[#00FF41] transition-colors">
													&lt;RedExterna /&gt;{' '}
													<span className="text-green-800 text-xs ml-2">
														(Integración API)
													</span>
													<ul className="pl-8 mt-1 space-y-1 border-l-2 border-green-900/50 text-green-700 text-xs">
														<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2">
															Loading Spinner /
															Error Alert
														</li>
														<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2">
															Tarjetas de Posts
														</li>
														<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2">
															Paginador
															(Prev/Next)
														</li>
													</ul>
												</li>

												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-3 hover:text-[#00FF41] transition-colors">
													&lt;MatrixGallery /&gt;{' '}
													<span className="text-green-800 text-xs ml-2">
														(Imágenes)
													</span>
													<ul className="pl-8 mt-1 space-y-1 border-l-2 border-green-900/50 text-green-700 text-xs">
														<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2">
															Grid de Thumbnails
														</li>
														<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-2">
															Lightbox Modal (Zoom
															y Controles)
														</li>
													</ul>
												</li>

												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-3 hover:text-[#00FF41] transition-colors">
													&lt;Bitacora /&gt;{' '}
													<span className="text-green-800 text-xs ml-2">
														(Logs del Sistema)
													</span>
												</li>

												<li className="relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-green-900/50 before:-left-8 before:top-3 hover:text-[#00FF41] transition-colors">
													&lt;ArbolRender /&gt;{' '}
													<span className="text-green-800 text-xs ml-2">
														(Vista Actual)
													</span>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default ArbolRender
